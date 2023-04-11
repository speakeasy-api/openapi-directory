import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a Metastore configuration.
 */
export declare class MetastoreConfig extends SpeakeasyBase {
    /**
     * Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name]
     */
    dataprocMetastoreService?: string;
}
