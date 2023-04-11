import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersPackageItem } from "./controllerspackageitem";
/**
 * OK
 */
export declare class ControllersPackagesResponse extends SpeakeasyBase {
    data?: ControllersPackageItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
