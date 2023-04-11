import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Cloud Storage location.
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * The URI of the Cloud Storage object. It's the same URI that is used by gsutil. For example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information.
     */
    uri?: string;
    /**
     * The URI prefix of all generated Cloud Storage objects. For example: "gs://bucket_name/object_name_prefix". Each object URI is in format: "gs://bucket_name/object_name_prefix// and only contains assets for that type. starts from 0. For example: "gs://bucket_name/object_name_prefix/google.compute.disk/0" is the first shard of output objects containing all google.compute.disk assets. An INVALID_ARGUMENT error will be returned if file with the same name "gs://bucket_name/object_name_prefix" already exists.
     */
    uriPrefix?: string;
}
