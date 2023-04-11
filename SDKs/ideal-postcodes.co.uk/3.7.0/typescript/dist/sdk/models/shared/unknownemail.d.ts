import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Catch-all status is not known
 */
export declare enum UnknownEmailCatchallEnum {
    Null = "null"
}
/**
 * Deliverability is not known
 */
export declare enum UnknownEmailDeliverableEnum {
    Null = "null"
}
/**
 * Disposability is not known
 */
export declare enum UnknownEmailDisposableEnum {
    Null = "null"
}
/**
 * Free email provider is not known
 */
export declare enum UnknownEmailFreeEnum {
    Null = "null"
}
export declare enum UnknownEmailResultEnum {
    Unknown = "unknown"
}
/**
 * Role is not known
 */
export declare enum UnknownEmailRoleEnum {
    Null = "null"
}
export declare class UnknownEmail extends SpeakeasyBase {
    /**
     * Catch-all status is not known
     */
    catchall: UnknownEmailCatchallEnum;
    /**
     * Deliverability is not known
     */
    deliverable: UnknownEmailDeliverableEnum;
    /**
     * Disposability is not known
     */
    disposable: UnknownEmailDisposableEnum;
    /**
     * Free email provider is not known
     */
    free: UnknownEmailFreeEnum;
    result: UnknownEmailResultEnum;
    /**
     * Role is not known
     */
    role: UnknownEmailRoleEnum;
}
