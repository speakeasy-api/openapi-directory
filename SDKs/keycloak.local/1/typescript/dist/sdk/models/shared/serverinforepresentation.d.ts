import { SpeakeasyBase } from "../../../internal/utils";
import { MemoryInfoRepresentation } from "./memoryinforepresentation";
import { PasswordPolicyTypeRepresentation } from "./passwordpolicytyperepresentation";
import { ProfileInfoRepresentation } from "./profileinforepresentation";
import { SystemInfoRepresentation } from "./systeminforepresentation";
/**
 * success
 */
export declare class ServerInfoRepresentation extends SpeakeasyBase {
    builtinProtocolMappers?: Record<string, any>;
    clientImporters?: Record<string, any>[];
    clientInstallations?: Record<string, any>;
    componentTypes?: Record<string, any>;
    enums?: Record<string, any>;
    identityProviders?: Record<string, any>[];
    memoryInfo?: MemoryInfoRepresentation;
    passwordPolicies?: PasswordPolicyTypeRepresentation[];
    profileInfo?: ProfileInfoRepresentation;
    protocolMapperTypes?: Record<string, any>;
    providers?: Record<string, any>;
    socialProviders?: Record<string, any>[];
    systemInfo?: SystemInfoRepresentation;
    themes?: Record<string, any>;
}
