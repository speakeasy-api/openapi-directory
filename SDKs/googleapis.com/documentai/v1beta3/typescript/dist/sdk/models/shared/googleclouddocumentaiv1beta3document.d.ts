import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentEntity } from "./googleclouddocumentaiv1beta3documententity";
import { GoogleCloudDocumentaiV1beta3DocumentEntityRelation } from "./googleclouddocumentaiv1beta3documententityrelation";
import { GoogleCloudDocumentaiV1beta3DocumentPage } from "./googleclouddocumentaiv1beta3documentpage";
import { GoogleCloudDocumentaiV1beta3DocumentRevision } from "./googleclouddocumentaiv1beta3documentrevision";
import { GoogleCloudDocumentaiV1beta3DocumentShardInfo } from "./googleclouddocumentaiv1beta3documentshardinfo";
import { GoogleCloudDocumentaiV1beta3DocumentStyle } from "./googleclouddocumentaiv1beta3documentstyle";
import { GoogleCloudDocumentaiV1beta3DocumentTextChange } from "./googleclouddocumentaiv1beta3documenttextchange";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
 */
export declare class GoogleCloudDocumentaiV1beta3Document extends SpeakeasyBase {
    /**
     * Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: GoogleCloudDocumentaiV1beta3DocumentEntity[];
    /**
     * Placeholder. Relationship among Document.entities.
     */
    entityRelations?: GoogleCloudDocumentaiV1beta3DocumentEntityRelation[];
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: GoogleRpcStatus;
    /**
     * An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    mimeType?: string;
    /**
     * Visual page layout for the Document.
     */
    pages?: GoogleCloudDocumentaiV1beta3DocumentPage[];
    /**
     * Placeholder. Revision history of this document.
     */
    revisions?: GoogleCloudDocumentaiV1beta3DocumentRevision[];
    /**
     * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
     */
    shardInfo?: GoogleCloudDocumentaiV1beta3DocumentShardInfo;
    /**
     * Optional. UTF-8 encoded text in reading order from the document.
     */
    text?: string;
    /**
     * Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
     */
    textChanges?: GoogleCloudDocumentaiV1beta3DocumentTextChange[];
    /**
     * Styles for the Document.text.
     */
    textStyles?: GoogleCloudDocumentaiV1beta3DocumentStyle[];
    /**
     * Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.
     */
    uri?: string;
}
