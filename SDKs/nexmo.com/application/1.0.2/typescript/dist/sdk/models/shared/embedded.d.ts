import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
export declare class Embedded extends SpeakeasyBase {
    /**
     * The collection of your applications. Each object contains information about an an individual application. The public_key is not included in the application information.
     */
    applications?: Application[];
}
