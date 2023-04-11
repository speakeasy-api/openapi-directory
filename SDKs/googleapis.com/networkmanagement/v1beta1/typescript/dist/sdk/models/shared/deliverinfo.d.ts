import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target type where the packet is delivered to.
 */
export declare enum DeliverInfoTargetEnum {
    TargetUnspecified = "TARGET_UNSPECIFIED",
    Instance = "INSTANCE",
    Internet = "INTERNET",
    GoogleApi = "GOOGLE_API",
    GkeMaster = "GKE_MASTER",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    PscPublishedService = "PSC_PUBLISHED_SERVICE",
    PscGoogleApi = "PSC_GOOGLE_API",
    PscVpcSc = "PSC_VPC_SC",
    ServerlessNeg = "SERVERLESS_NEG"
}
/**
 * Details of the final state "deliver" and associated resource.
 */
export declare class DeliverInfo extends SpeakeasyBase {
    /**
     * URI of the resource that the packet is delivered to.
     */
    resourceUri?: string;
    /**
     * Target type where the packet is delivered to.
     */
    target?: DeliverInfoTargetEnum;
}
