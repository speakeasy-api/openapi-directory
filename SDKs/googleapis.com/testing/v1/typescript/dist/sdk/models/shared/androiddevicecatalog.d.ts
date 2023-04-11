import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidModel } from "./androidmodel";
import { AndroidRuntimeConfiguration } from "./androidruntimeconfiguration";
import { AndroidVersion } from "./androidversion";
/**
 * The currently supported Android devices.
 */
export declare class AndroidDeviceCatalog extends SpeakeasyBase {
    /**
     * The set of supported Android device models.
     */
    models?: AndroidModel[];
    /**
     * Android configuration that can be selected at the time a test is run.
     */
    runtimeConfiguration?: AndroidRuntimeConfiguration;
    /**
     * The set of supported Android OS versions.
     */
    versions?: AndroidVersion[];
}
