import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The response message for LookupService.ResolveService.
 */
export declare class ResolveServiceResponse extends SpeakeasyBase {
    /**
     * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
     */
    service?: Service;
}
