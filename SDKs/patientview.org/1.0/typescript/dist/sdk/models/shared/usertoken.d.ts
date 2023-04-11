import { SpeakeasyBase } from "../../../internal/utils";
import { BaseGroup } from "./basegroup";
import { ExternalStandard } from "./externalstandard";
import { Feature } from "./feature";
import { Role } from "./role";
import { Route } from "./route";
import { User } from "./user";
/**
 * Description was not specified
 */
export declare class UserToken extends SpeakeasyBase {
    auditActions?: string[];
    checkSecretWord?: boolean;
    created?: Date;
    expiration?: Date;
    externalStandards?: ExternalStandard[];
    groupFeatures?: Feature[];
    groupMessagingEnabled?: boolean;
    mustSetSecretWord?: boolean;
    patientFeatures?: Feature[];
    patientMessagingFeatureTypes?: string[];
    patientRoles?: Role[];
    routes?: Route[];
    secretWord?: string;
    secretWordChoices?: Record<string, any>;
    secretWordIndexes?: string[];
    secretWordSalt?: string;
    secretWordToken?: string;
    securityRoles?: Role[];
    shouldEnterCondition?: boolean;
    staffFeatures?: Feature[];
    staffRoles?: Role[];
    token?: string;
    user?: User;
    userFeatures?: Feature[];
    userGroups?: BaseGroup[];
}
