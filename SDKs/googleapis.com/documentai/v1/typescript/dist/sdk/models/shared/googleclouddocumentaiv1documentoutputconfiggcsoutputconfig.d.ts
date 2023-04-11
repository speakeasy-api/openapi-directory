import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig } from "./googleclouddocumentaiv1documentoutputconfiggcsoutputconfigshardingconfig";
/**
 * The configuration used when outputting documents.
 */
export declare class GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig extends SpeakeasyBase {
    /**
     * Specifies which fields to include in the output documents. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.
     */
    fieldMask?: string;
    /**
     * The Cloud Storage uri (a directory) of the output.
     */
    gcsUri?: string;
    /**
     * The sharding config for the output document.
     */
    shardingConfig?: GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig;
}
