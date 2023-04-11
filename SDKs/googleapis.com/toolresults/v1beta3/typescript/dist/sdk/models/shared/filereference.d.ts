import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a file.
 */
export declare class FileReference extends SpeakeasyBase {
    /**
     * The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set
     */
    fileUri?: string;
}
