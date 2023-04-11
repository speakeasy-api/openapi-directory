import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { ChangedBy } from "./changedby";
import { EnvironmentEnum } from "./environmentenum";
import { ReportTypeEnum } from "./reporttypeenum";
import { ScanProfileEnum } from "./scanprofileenum";
import { Site, SiteInput } from "./site";
import { TargetTypeEnum } from "./targettypeenum";
export declare class TargetInput extends SpeakeasyBase {
    /**
     * Id of the connected target in a multi-environment targets.
     *
     * @remarks
     *
     */
    connectedTarget?: string;
    /**
     * Multi-environment targets can identify environments using this property.
     *
     * @remarks
     *
     */
    environment?: EnvironmentEnum;
    /**
     * User labels for the scope. (This feature is currently only available for certain accounts,
     *
     * @remarks
     * please contact our support if you are interested in using it)
     *
     */
    labels?: string[];
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * * default - default report, no extra information added
     *
     * @remarks
     * * owasp - adds table on OWASP Top 10 most critical web application risks
     * * pci - adds table on PCI requirements
     *
     */
    reportType?: ReportTypeEnum;
    /**
     * * lightning - fast simple scan
     *
     * @remarks
     * * normal - default profile
     * * full - does everything the default profile does and adds boolean based
     * SQL injection tests
     * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
     * and tries fewer payloads for SQL injection tests
     *
     */
    scanProfile?: ScanProfileEnum;
    /**
     * Main resource associated with a target
     */
    site?: SiteInput;
    /**
     * The type of a target determines what the limitations imposed on a
     *
     * @remarks
     * target.
     * * free - Every account is allowed to have 5 free targets, these targets
     * do not need to be verified but can only perform lightning
     * scans.
     * * single - Single environment targets need to be verified but are
     * allowed to run any type of scan allowed by the plan.
     * * multi - Multi environment targets are used when you want
     * to scan the same application in different environments.
     *
     */
    type?: TargetTypeEnum;
}
export declare class TargetAllowedScanProfiles extends SpeakeasyBase {
    /**
     * * lightning - fast simple scan
     *
     * @remarks
     * * normal - default profile
     * * full - does everything the default profile does and adds boolean based
     * SQL injection tests
     * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
     * and tries fewer payloads for SQL injection tests
     *
     */
    id?: ScanProfileEnum;
    /**
     * Name of the scan profile.
     */
    name?: string;
}
/**
 * Event object.
 */
export declare class Target extends SpeakeasyBase {
    /**
     * Valid scan profiles for the target.
     */
    allowedScanProfiles?: TargetAllowedScanProfiles[];
    /**
     * Secondary domains that should be scanned
     */
    assets?: Asset[];
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Id of the connected target in a multi-environment targets.
     *
     * @remarks
     *
     */
    connectedTarget?: string;
    /**
     * Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.
     *
     * @remarks
     *
     */
    enabled?: boolean;
    /**
     * Multi-environment targets can identify environments using this property.
     *
     * @remarks
     *
     */
    environment?: EnvironmentEnum;
    /**
     * Object id.
     */
    id?: string;
    /**
     * User labels for the scope. (This feature is currently only available for certain accounts,
     *
     * @remarks
     * please contact our support if you are interested in using it)
     *
     */
    labels?: string[];
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * * default - default report, no extra information added
     *
     * @remarks
     * * owasp - adds table on OWASP Top 10 most critical web application risks
     * * pci - adds table on PCI requirements
     *
     */
    reportType?: ReportTypeEnum;
    /**
     * * lightning - fast simple scan
     *
     * @remarks
     * * normal - default profile
     * * full - does everything the default profile does and adds boolean based
     * SQL injection tests
     * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
     * and tries fewer payloads for SQL injection tests
     *
     */
    scanProfile?: ScanProfileEnum;
    /**
     * Main resource associated with a target
     */
    site?: Site;
    /**
     * The type of a target determines what the limitations imposed on a
     *
     * @remarks
     * target.
     * * free - Every account is allowed to have 5 free targets, these targets
     * do not need to be verified but can only perform lightning
     * scans.
     * * single - Single environment targets need to be verified but are
     * allowed to run any type of scan allowed by the plan.
     * * multi - Multi environment targets are used when you want
     * to scan the same application in different environments.
     *
     */
    type?: TargetTypeEnum;
}
