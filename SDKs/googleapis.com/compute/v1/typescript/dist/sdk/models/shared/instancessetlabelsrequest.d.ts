import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstancesSetLabelsRequest extends SpeakeasyBase {
    /**
     * Fingerprint of the previous set of labels for this resource, used to prevent conflicts. Provide the latest fingerprint value when making a request to add or change labels.
     */
    labelFingerprint?: string;
    labels?: Record<string, string>;
}
