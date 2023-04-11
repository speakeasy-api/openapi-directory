import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSourceDetails, AwsSourceDetailsInput } from "./awssourcedetails";
import { VmwareSourceDetails } from "./vmwaresourcedetails";
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * AwsSourceDetails message describes a specific source details for the AWS source type.
     */
    aws?: AwsSourceDetails;
    /**
     * Output only. The create time timestamp.
     */
    createTime?: string;
    /**
     * User-provided description of the source.
     */
    description?: string;
    /**
     * The labels of the source.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The Source name.
     */
    name?: string;
    /**
     * Output only. The update time timestamp.
     */
    updateTime?: string;
    /**
     * VmwareSourceDetails message describes a specific source details for the vmware source type.
     */
    vmware?: VmwareSourceDetails;
}
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
 */
export declare class SourceInput extends SpeakeasyBase {
    /**
     * AwsSourceDetails message describes a specific source details for the AWS source type.
     */
    aws?: AwsSourceDetailsInput;
    /**
     * User-provided description of the source.
     */
    description?: string;
    /**
     * The labels of the source.
     */
    labels?: Record<string, string>;
    /**
     * VmwareSourceDetails message describes a specific source details for the vmware source type.
     */
    vmware?: VmwareSourceDetails;
}
