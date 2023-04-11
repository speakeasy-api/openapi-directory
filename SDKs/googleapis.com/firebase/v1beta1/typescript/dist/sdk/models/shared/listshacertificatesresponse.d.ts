import { SpeakeasyBase } from "../../../internal/utils";
import { ShaCertificate } from "./shacertificate";
/**
 * Successful response
 */
export declare class ListShaCertificatesResponse extends SpeakeasyBase {
    /**
     * The list of each `ShaCertificate` associated with the `AndroidApp`.
     */
    certificates?: ShaCertificate[];
}
