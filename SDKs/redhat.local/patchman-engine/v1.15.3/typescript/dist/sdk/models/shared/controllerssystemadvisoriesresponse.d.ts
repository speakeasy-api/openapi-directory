import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersSystemAdvisoryItem } from "./controllerssystemadvisoryitem";
/**
 * OK
 */
export declare class ControllersSystemAdvisoriesResponse extends SpeakeasyBase {
    /**
     * advisories items
     */
    data?: ControllersSystemAdvisoryItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
