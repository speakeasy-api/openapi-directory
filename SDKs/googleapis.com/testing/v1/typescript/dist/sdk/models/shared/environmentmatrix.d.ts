import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceList } from "./androiddevicelist";
import { AndroidMatrix } from "./androidmatrix";
import { IosDeviceList } from "./iosdevicelist";
/**
 * The matrix of environments in which the test is to be executed.
 */
export declare class EnvironmentMatrix extends SpeakeasyBase {
    /**
     * A list of Android device configurations in which the test is to be executed.
     */
    androidDeviceList?: AndroidDeviceList;
    /**
     * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
     */
    androidMatrix?: AndroidMatrix;
    /**
     * A list of iOS device configurations in which the test is to be executed.
     */
    iosDeviceList?: IosDeviceList;
}
