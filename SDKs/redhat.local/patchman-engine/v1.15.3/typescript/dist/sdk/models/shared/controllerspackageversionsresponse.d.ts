import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersPackageVersionItem } from "./controllerspackageversionitem";
/**
 * OK
 */
export declare class ControllersPackageVersionsResponse extends SpeakeasyBase {
    data?: ControllersPackageVersionItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
