import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
export declare class Api extends SpeakeasyBase {
    annotations?: Record<string, string>;
    availability?: string;
    createTime?: string;
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    name?: string;
    recommendedDeployment?: string;
    recommendedVersion?: string;
    updateTime?: string;
}
/**
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
export declare class ApiInput extends SpeakeasyBase {
    annotations?: Record<string, string>;
    availability?: string;
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    name?: string;
    recommendedDeployment?: string;
    recommendedVersion?: string;
}
