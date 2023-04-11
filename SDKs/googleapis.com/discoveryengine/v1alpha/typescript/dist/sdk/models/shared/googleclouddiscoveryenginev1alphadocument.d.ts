import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Document captures all raw metadata information of items to be recommended or searched.
 */
export declare class GoogleCloudDiscoveryengineV1alphaDocument extends SpeakeasyBase {
    /**
     * Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    id?: string;
    /**
     * The JSON string representation of the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.
     */
    jsonData?: string;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    parentDocumentId?: string;
    /**
     * The identifier of the schema located in the same data store.
     */
    schemaId?: string;
    /**
     * The structured JSON data for the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.
     */
    structData?: Record<string, any>;
}
