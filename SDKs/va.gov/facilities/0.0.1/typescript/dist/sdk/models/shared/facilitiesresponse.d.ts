import { SpeakeasyBase } from "../../../internal/utils";
import { FacilitiesMetadata } from "./facilitiesmetadata";
import { Facility } from "./facility";
import { PageLinks } from "./pagelinks";
/**
 * Success
 */
export declare class FacilitiesResponse extends SpeakeasyBase {
    data?: Facility[];
    links: PageLinks;
    meta: FacilitiesMetadata;
}
