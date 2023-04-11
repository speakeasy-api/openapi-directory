import { SpeakeasyBase } from "../../../internal/utils";
import { GeographicDivision } from "./geographicdivision";
import { Office } from "./office";
import { Official } from "./official";
/**
 * Successful response
 */
export declare class RepresentativeInfoData extends SpeakeasyBase {
    /**
     * A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.
     */
    divisions?: Record<string, GeographicDivision>;
    /**
     * Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
     */
    offices?: Office[];
    /**
     * Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
     */
    officials?: Official[];
}
