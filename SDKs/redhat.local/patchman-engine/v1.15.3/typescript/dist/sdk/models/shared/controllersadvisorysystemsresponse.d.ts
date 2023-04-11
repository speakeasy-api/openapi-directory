import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
import { ControllersSystemItem } from "./controllerssystemitem";
/**
 * OK
 */
export declare class ControllersAdvisorySystemsResponse extends SpeakeasyBase {
    data?: ControllersSystemItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
