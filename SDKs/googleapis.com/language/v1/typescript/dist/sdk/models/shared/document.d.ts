import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.
 */
export declare enum DocumentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}
/**
 * Represents the input to API methods.
 */
export declare class Document extends SpeakeasyBase {
    /**
     * The content of the input in string format. Cloud audit logging exempt since it is based on user data.
     */
    content?: string;
    /**
     * The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.
     */
    gcsContentUri?: string;
    /**
     * The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.
     */
    language?: string;
    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.
     */
    type?: DocumentTypeEnum;
}
