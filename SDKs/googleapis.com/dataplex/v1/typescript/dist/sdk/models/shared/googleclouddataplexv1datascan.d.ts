import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";
import { GoogleCloudDataplexV1DataScanExecutionSpec } from "./googleclouddataplexv1datascanexecutionspec";
import { GoogleCloudDataplexV1DataScanExecutionStatus } from "./googleclouddataplexv1datascanexecutionstatus";
import { GoogleCloudDataplexV1DataSource } from "./googleclouddataplexv1datasource";
/**
 * Output only. Current state of the DataScan.
 */
export declare enum GoogleCloudDataplexV1DataScanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Output only. The type of DataScan.
 */
export declare enum GoogleCloudDataplexV1DataScanTypeEnum {
    DataScanTypeUnspecified = "DATA_SCAN_TYPE_UNSPECIFIED",
    DataQuality = "DATA_QUALITY",
    DataProfile = "DATA_PROFILE"
}
/**
 * Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
 */
export declare class GoogleCloudDataplexV1DataScan extends SpeakeasyBase {
    /**
     * Output only. The time when the scan was created.
     */
    createTime?: string;
    /**
     * The data source for DataScan.
     */
    data?: GoogleCloudDataplexV1DataSource;
    /**
     * DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
     */
    dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
    /**
     * DataProfileScan related setting.
     */
    dataProfileSpec?: Record<string, any>;
    /**
     * The output of a DataQualityScan.
     */
    dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
    /**
     * DataQualityScan related setting.
     */
    dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
    /**
     * Optional. Description of the scan. Must be between 1-1024 characters.
     */
    description?: string;
    /**
     * Optional. User friendly display name. Must be between 1-256 characters.
     */
    displayName?: string;
    /**
     * DataScan execution settings.
     */
    executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;
    /**
     * Status of the data scan execution.
     */
    executionStatus?: GoogleCloudDataplexV1DataScanExecutionStatus;
    /**
     * Optional. User-defined labels for the scan.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region.
     */
    name?: string;
    /**
     * Output only. Current state of the DataScan.
     */
    state?: GoogleCloudDataplexV1DataScanStateEnum;
    /**
     * Output only. The type of DataScan.
     */
    type?: GoogleCloudDataplexV1DataScanTypeEnum;
    /**
     * Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the scan was last updated.
     */
    updateTime?: string;
}
/**
 * Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
 */
export declare class GoogleCloudDataplexV1DataScanInput extends SpeakeasyBase {
    /**
     * The data source for DataScan.
     */
    data?: GoogleCloudDataplexV1DataSource;
    /**
     * DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
     */
    dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
    /**
     * DataProfileScan related setting.
     */
    dataProfileSpec?: Record<string, any>;
    /**
     * The output of a DataQualityScan.
     */
    dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
    /**
     * DataQualityScan related setting.
     */
    dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
    /**
     * Optional. Description of the scan. Must be between 1-1024 characters.
     */
    description?: string;
    /**
     * Optional. User friendly display name. Must be between 1-256 characters.
     */
    displayName?: string;
    /**
     * DataScan execution settings.
     */
    executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;
    /**
     * Status of the data scan execution.
     */
    executionStatus?: GoogleCloudDataplexV1DataScanExecutionStatus;
    /**
     * Optional. User-defined labels for the scan.
     */
    labels?: Record<string, string>;
}
