import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersSystemPackageData } from "./controllerssystempackagedata";
/**
 * OK
 */
export declare class ControllersSystemPackageResponse extends SpeakeasyBase {
    data?: ControllersSystemPackageData[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
