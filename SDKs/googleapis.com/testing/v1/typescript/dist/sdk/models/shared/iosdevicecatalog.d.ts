import { SpeakeasyBase } from "../../../internal/utils";
import { IosModel } from "./iosmodel";
import { IosRuntimeConfiguration } from "./iosruntimeconfiguration";
import { IosVersion } from "./iosversion";
import { XcodeVersion } from "./xcodeversion";
/**
 * The currently supported iOS devices.
 */
export declare class IosDeviceCatalog extends SpeakeasyBase {
    /**
     * The set of supported iOS device models.
     */
    models?: IosModel[];
    /**
     * iOS configuration that can be selected at the time a test is run.
     */
    runtimeConfiguration?: IosRuntimeConfiguration;
    /**
     * The set of supported iOS software versions.
     */
    versions?: IosVersion[];
    /**
     * The set of supported Xcode versions.
     */
    xcodeVersions?: XcodeVersion[];
}
