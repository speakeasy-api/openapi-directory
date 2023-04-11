import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MitreAttackAdditionalTacticsEnum {
    TacticUnspecified = "TACTIC_UNSPECIFIED",
    Reconnaissance = "RECONNAISSANCE",
    ResourceDevelopment = "RESOURCE_DEVELOPMENT",
    InitialAccess = "INITIAL_ACCESS",
    Execution = "EXECUTION",
    Persistence = "PERSISTENCE",
    PrivilegeEscalation = "PRIVILEGE_ESCALATION",
    DefenseEvasion = "DEFENSE_EVASION",
    CredentialAccess = "CREDENTIAL_ACCESS",
    Discovery = "DISCOVERY",
    LateralMovement = "LATERAL_MOVEMENT",
    Collection = "COLLECTION",
    CommandAndControl = "COMMAND_AND_CONTROL",
    Exfiltration = "EXFILTRATION",
    Impact = "IMPACT"
}
export declare enum MitreAttackAdditionalTechniquesEnum {
    TechniqueUnspecified = "TECHNIQUE_UNSPECIFIED",
    ActiveScanning = "ACTIVE_SCANNING",
    ScanningIpBlocks = "SCANNING_IP_BLOCKS",
    IngressToolTransfer = "INGRESS_TOOL_TRANSFER",
    NativeApi = "NATIVE_API",
    SharedModules = "SHARED_MODULES",
    CommandAndScriptingInterpreter = "COMMAND_AND_SCRIPTING_INTERPRETER",
    UnixShell = "UNIX_SHELL",
    ResourceHijacking = "RESOURCE_HIJACKING",
    Proxy = "PROXY",
    ExternalProxy = "EXTERNAL_PROXY",
    MultiHopProxy = "MULTI_HOP_PROXY",
    DynamicResolution = "DYNAMIC_RESOLUTION",
    UnsecuredCredentials = "UNSECURED_CREDENTIALS",
    ValidAccounts = "VALID_ACCOUNTS",
    LocalAccounts = "LOCAL_ACCOUNTS",
    CloudAccounts = "CLOUD_ACCOUNTS",
    NetworkDenialOfService = "NETWORK_DENIAL_OF_SERVICE",
    PermissionGroupsDiscovery = "PERMISSION_GROUPS_DISCOVERY",
    CloudGroups = "CLOUD_GROUPS",
    ExfiltrationOverWebService = "EXFILTRATION_OVER_WEB_SERVICE",
    ExfiltrationToCloudStorage = "EXFILTRATION_TO_CLOUD_STORAGE",
    AccountManipulation = "ACCOUNT_MANIPULATION",
    SshAuthorizedKeys = "SSH_AUTHORIZED_KEYS",
    CreateOrModifySystemProcess = "CREATE_OR_MODIFY_SYSTEM_PROCESS",
    StealWebSessionCookie = "STEAL_WEB_SESSION_COOKIE",
    ModifyCloudComputeInfrastructure = "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE",
    ExploitPublicFacingApplication = "EXPLOIT_PUBLIC_FACING_APPLICATION",
    ModifyAuthenticationProcess = "MODIFY_AUTHENTICATION_PROCESS",
    DataDestruction = "DATA_DESTRUCTION",
    DomainPolicyModification = "DOMAIN_POLICY_MODIFICATION",
    ImpairDefenses = "IMPAIR_DEFENSES",
    NetworkServiceDiscovery = "NETWORK_SERVICE_DISCOVERY",
    AccessTokenManipulation = "ACCESS_TOKEN_MANIPULATION",
    AbuseElevationControlMechanism = "ABUSE_ELEVATION_CONTROL_MECHANISM",
    DefaultAccounts = "DEFAULT_ACCOUNTS"
}
/**
 * The MITRE ATT&CK tactic most closely represented by this finding, if any.
 */
export declare enum MitreAttackPrimaryTacticEnum {
    TacticUnspecified = "TACTIC_UNSPECIFIED",
    Reconnaissance = "RECONNAISSANCE",
    ResourceDevelopment = "RESOURCE_DEVELOPMENT",
    InitialAccess = "INITIAL_ACCESS",
    Execution = "EXECUTION",
    Persistence = "PERSISTENCE",
    PrivilegeEscalation = "PRIVILEGE_ESCALATION",
    DefenseEvasion = "DEFENSE_EVASION",
    CredentialAccess = "CREDENTIAL_ACCESS",
    Discovery = "DISCOVERY",
    LateralMovement = "LATERAL_MOVEMENT",
    Collection = "COLLECTION",
    CommandAndControl = "COMMAND_AND_CONTROL",
    Exfiltration = "EXFILTRATION",
    Impact = "IMPACT"
}
export declare enum MitreAttackPrimaryTechniquesEnum {
    TechniqueUnspecified = "TECHNIQUE_UNSPECIFIED",
    ActiveScanning = "ACTIVE_SCANNING",
    ScanningIpBlocks = "SCANNING_IP_BLOCKS",
    IngressToolTransfer = "INGRESS_TOOL_TRANSFER",
    NativeApi = "NATIVE_API",
    SharedModules = "SHARED_MODULES",
    CommandAndScriptingInterpreter = "COMMAND_AND_SCRIPTING_INTERPRETER",
    UnixShell = "UNIX_SHELL",
    ResourceHijacking = "RESOURCE_HIJACKING",
    Proxy = "PROXY",
    ExternalProxy = "EXTERNAL_PROXY",
    MultiHopProxy = "MULTI_HOP_PROXY",
    DynamicResolution = "DYNAMIC_RESOLUTION",
    UnsecuredCredentials = "UNSECURED_CREDENTIALS",
    ValidAccounts = "VALID_ACCOUNTS",
    LocalAccounts = "LOCAL_ACCOUNTS",
    CloudAccounts = "CLOUD_ACCOUNTS",
    NetworkDenialOfService = "NETWORK_DENIAL_OF_SERVICE",
    PermissionGroupsDiscovery = "PERMISSION_GROUPS_DISCOVERY",
    CloudGroups = "CLOUD_GROUPS",
    ExfiltrationOverWebService = "EXFILTRATION_OVER_WEB_SERVICE",
    ExfiltrationToCloudStorage = "EXFILTRATION_TO_CLOUD_STORAGE",
    AccountManipulation = "ACCOUNT_MANIPULATION",
    SshAuthorizedKeys = "SSH_AUTHORIZED_KEYS",
    CreateOrModifySystemProcess = "CREATE_OR_MODIFY_SYSTEM_PROCESS",
    StealWebSessionCookie = "STEAL_WEB_SESSION_COOKIE",
    ModifyCloudComputeInfrastructure = "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE",
    ExploitPublicFacingApplication = "EXPLOIT_PUBLIC_FACING_APPLICATION",
    ModifyAuthenticationProcess = "MODIFY_AUTHENTICATION_PROCESS",
    DataDestruction = "DATA_DESTRUCTION",
    DomainPolicyModification = "DOMAIN_POLICY_MODIFICATION",
    ImpairDefenses = "IMPAIR_DEFENSES",
    NetworkServiceDiscovery = "NETWORK_SERVICE_DISCOVERY",
    AccessTokenManipulation = "ACCESS_TOKEN_MANIPULATION",
    AbuseElevationControlMechanism = "ABUSE_ELEVATION_CONTROL_MECHANISM",
    DefaultAccounts = "DEFAULT_ACCOUNTS"
}
/**
 * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
 */
export declare class MitreAttack extends SpeakeasyBase {
    /**
     * Additional MITRE ATT&CK tactics related to this finding, if any.
     */
    additionalTactics?: MitreAttackAdditionalTacticsEnum[];
    /**
     * Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.
     */
    additionalTechniques?: MitreAttackAdditionalTechniquesEnum[];
    /**
     * The MITRE ATT&CK tactic most closely represented by this finding, if any.
     */
    primaryTactic?: MitreAttackPrimaryTacticEnum;
    /**
     * The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).
     */
    primaryTechniques?: MitreAttackPrimaryTechniquesEnum[];
    /**
     * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
     */
    version?: string;
}
