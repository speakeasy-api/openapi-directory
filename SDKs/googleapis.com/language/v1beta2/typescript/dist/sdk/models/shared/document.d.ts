import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content.
 */
export declare enum DocumentBoilerplateHandlingEnum {
    BoilerplateHandlingUnspecified = "BOILERPLATE_HANDLING_UNSPECIFIED",
    SkipBoilerplate = "SKIP_BOILERPLATE",
    KeepBoilerplate = "KEEP_BOILERPLATE"
}
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
     * Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content.
     */
    boilerplateHandling?: DocumentBoilerplateHandlingEnum;
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
     * The web URI where the document comes from. This URI is not used for fetching the content, but as a hint for analyzing the document.
     */
    referenceWebUri?: string;
    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.
     */
    type?: DocumentTypeEnum;
}
