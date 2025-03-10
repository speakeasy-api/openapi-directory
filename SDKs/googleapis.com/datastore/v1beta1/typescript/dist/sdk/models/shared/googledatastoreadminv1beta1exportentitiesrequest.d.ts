import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1beta1EntityFilter } from "./googledatastoreadminv1beta1entityfilter";
/**
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
 */
export declare class GoogleDatastoreAdminV1beta1ExportEntitiesRequest extends SpeakeasyBase {
    /**
     * Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
     */
    entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * Client-assigned labels.
     */
    labels?: Record<string, string>;
    /**
     * Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict.
     */
    outputUrlPrefix?: string;
}
