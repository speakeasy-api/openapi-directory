import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Secret provides a reference to entries in Secret Manager.
 */
export declare class Secret extends SpeakeasyBase {
    /**
     * The resource name of the secret version in the format, format as: `projects/* /secrets/* /versions/*`.
     */
    secretVersion?: string;
}
