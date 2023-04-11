import { SpeakeasyBase } from "../../../internal/utils";
import { AcmeTxtRecord } from "./acmetxtrecord";
/**
 * The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain.
 */
export declare class AcmeChallengeSet extends SpeakeasyBase {
    /**
     * The ACME challenges on the requested domain represented as individual TXT records.
     */
    record?: AcmeTxtRecord[];
}
