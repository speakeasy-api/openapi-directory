import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersPackageSystemItem } from "./controllerspackagesystemitem";
/**
 * OK
 */
export declare class ControllersPackageSystemsResponse extends SpeakeasyBase {
    data?: ControllersPackageSystemItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
