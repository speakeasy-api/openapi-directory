import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorityInput } from "./authority";
import { MembershipEndpointInput } from "./membershipendpoint";
import { MembershipStateInput } from "./membershipstate";
import { Authority } from "./authority";
import { MembershipEndpoint } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";
export declare enum MembershipInfrastructureTypeEnum {
    InfrastructureTypeUnspecified = "INFRASTRUCTURE_TYPE_UNSPECIFIED",
    OnPrem = "ON_PREM",
    MultiCloud = "MULTI_CLOUD"
}
/**
 * Membership contains information about a member cluster.
**/
export declare class MembershipInput extends SpeakeasyBase {
    authority?: AuthorityInput;
    description?: string;
    endpoint?: MembershipEndpointInput;
    externalId?: string;
    infrastructureType?: MembershipInfrastructureTypeEnum;
    labels?: Record<string, string>;
    state?: MembershipStateInput;
}
/**
 * Membership contains information about a member cluster.
**/
export declare class Membership extends SpeakeasyBase {
    authority?: Authority;
    createTime?: string;
    deleteTime?: string;
    description?: string;
    endpoint?: MembershipEndpoint;
    externalId?: string;
    infrastructureType?: MembershipInfrastructureTypeEnum;
    labels?: Record<string, string>;
    lastConnectionTime?: string;
    name?: string;
    state?: MembershipState;
    uniqueId?: string;
    updateTime?: string;
}
