import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auth
 */
export declare class TwoHundredSingleResultResultBundlesAuthz extends SpeakeasyBase {
    /**
     * Service
     */
    service?: string;
}
/**
 * Bundles
 */
export declare class TwoHundredSingleResultResultBundles extends SpeakeasyBase {
    /**
     * Auth
     */
    authz?: TwoHundredSingleResultResultBundlesAuthz;
}
/**
 * Logs
 */
export declare class TwoHundredSingleResultResultDecisionLogs extends SpeakeasyBase {
    /**
     * Service
     */
    service?: string;
}
/**
 * Global Key
 */
export declare class TwoHundredSingleResultResultKeysGlobalKey extends SpeakeasyBase {
    /**
     * Scope
     */
    scope?: string;
}
/**
 * Keys
 */
export declare class TwoHundredSingleResultResultKeys extends SpeakeasyBase {
    /**
     * Global Key
     */
    globalKey?: TwoHundredSingleResultResultKeysGlobalKey;
}
/**
 * Labels
 */
export declare class TwoHundredSingleResultResultLabels extends SpeakeasyBase {
    /**
     * Label ID
     */
    id?: string;
    /**
     * Version
     */
    version?: string;
}
export declare class TwoHundredSingleResultResultServicesAcmecorp extends SpeakeasyBase {
    url?: string;
}
/**
 * The types of services
 */
export declare class TwoHundredSingleResultResultServices extends SpeakeasyBase {
    acmecorp?: TwoHundredSingleResultResultServicesAcmecorp;
}
/**
 * Status
 */
export declare class TwoHundredSingleResultResultStatus extends SpeakeasyBase {
    /**
     * Service
     */
    service?: string;
}
export declare class TwoHundredSingleResultResult extends SpeakeasyBase {
    /**
     * Bundles
     */
    bundles?: TwoHundredSingleResultResultBundles;
    /**
     * Logs
     */
    decisionLogs?: TwoHundredSingleResultResultDecisionLogs;
    defaultAuthorizationDecision?: string;
    defaultDecision?: string;
    /**
     * Keys
     */
    keys?: TwoHundredSingleResultResultKeys;
    /**
     * Labels
     */
    labels?: TwoHundredSingleResultResultLabels;
    /**
     * The types of services
     */
    services?: TwoHundredSingleResultResultServices;
    /**
     * Status
     */
    status?: TwoHundredSingleResultResultStatus;
}
/**
 * Success
 */
export declare class TwoHundredSingleResult extends SpeakeasyBase {
    result?: TwoHundredSingleResultResult;
}
