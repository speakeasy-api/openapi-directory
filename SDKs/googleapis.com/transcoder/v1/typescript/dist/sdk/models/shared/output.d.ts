import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location of output file(s) in a Cloud Storage bucket.
 */
export declare class Output extends SpeakeasyBase {
    /**
     * URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty, the value is populated from `Job.output_uri`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
     */
    uri?: string;
}
