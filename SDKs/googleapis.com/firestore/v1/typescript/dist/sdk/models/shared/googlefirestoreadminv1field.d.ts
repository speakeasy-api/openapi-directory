import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexConfig } from "./googlefirestoreadminv1indexconfig";
import { GoogleFirestoreAdminV1TtlConfig } from "./googlefirestoreadminv1ttlconfig";
/**
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
 */
export declare class GoogleFirestoreAdminV1Field extends SpeakeasyBase {
    /**
     * The index configuration for this field.
     */
    indexConfig?: GoogleFirestoreAdminV1IndexConfig;
    /**
     * Required. A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     */
    name?: string;
    /**
     * The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document.
     */
    ttlConfig?: GoogleFirestoreAdminV1TtlConfig;
}
