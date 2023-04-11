import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadata } from "./enterprisecrmeventbusprototaskmetadata";
import { EnterpriseCrmEventbusProtoTaskUiConfig } from "./enterprisecrmeventbusprototaskuiconfig";
import { EnterpriseCrmEventbusStats } from "./enterprisecrmeventbusstats";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage } from "./enterprisecrmfrontendseventbusprotoparamspecsmessage";
/**
 * Defines the type of the task
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}
/**
 * Contains a task's metadata and associated information. Next available id: 7
 */
export declare class EnterpriseCrmFrontendsEventbusProtoTaskEntity extends SpeakeasyBase {
    /**
     * True if the task has conflict with vpcsc
     */
    disabledForVpcSc?: boolean;
    /**
     * TaskMetadata are attributes that are associated to every common Task we have.
     */
    metadata?: EnterpriseCrmEventbusProtoTaskMetadata;
    paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;
    /**
     * Stats for the requested dimensions: QPS, duration, and error/warning rate
     */
    stats?: EnterpriseCrmEventbusStats;
    /**
     * Defines the type of the task
     */
    taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
    /**
     * Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework:
     */
    uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig;
}
