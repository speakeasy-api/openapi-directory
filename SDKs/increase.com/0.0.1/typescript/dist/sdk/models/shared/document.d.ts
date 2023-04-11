import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of document.
 */
export declare enum DocumentCategoryEnum {
    Form1099Int = "form_1099_int"
}
/**
 * A constant representing the object's type. For this resource it will always be `document`.
 */
export declare enum DocumentTypeEnum {
    Document = "document"
}
/**
 * Increase generates certain documents / forms automatically for your application; they can be listed here. Currently the only supported document type is IRS Form 1099-INT.
 */
export declare class Document extends SpeakeasyBase {
    /**
     * The type of document.
     */
    category: DocumentCategoryEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Document was created.
     */
    createdAt: Date;
    /**
     * The identifier of the Entity the document was generated for.
     */
    entityId: string;
    /**
     * The identifier of the File containing the Document's contents.
     */
    fileId: string;
    /**
     * The Document identifier.
     */
    id: string;
    /**
     * A constant representing the object's type. For this resource it will always be `document`.
     */
    type: DocumentTypeEnum;
}
