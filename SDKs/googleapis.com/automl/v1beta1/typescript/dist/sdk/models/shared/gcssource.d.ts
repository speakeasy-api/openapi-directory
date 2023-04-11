import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location for the input content.
 */
export declare class GcsSource extends SpeakeasyBase {
    /**
     * Required. Google Cloud Storage URIs to input files, up to 2000 characters long. Accepted forms: * Full object path, e.g. gs://bucket/directory/object.csv
     */
    inputUris?: string[];
}
