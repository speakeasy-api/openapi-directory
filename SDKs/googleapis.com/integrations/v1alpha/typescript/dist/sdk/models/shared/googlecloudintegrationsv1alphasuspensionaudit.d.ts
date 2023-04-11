import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains when and by whom the suspension was resolved.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionAudit extends SpeakeasyBase {
    /**
     * Time at which this suspension was resolved.
     */
    resolveTime?: string;
    /**
     * Email address of the person who resolved this suspension.
     */
    resolver?: string;
}
