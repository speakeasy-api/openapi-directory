import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The type of the AS Path, which can be one of the following values: - 'AS_SET': unordered set of autonomous systems that the route in has traversed - 'AS_SEQUENCE': ordered set of autonomous systems that the route has traversed - 'AS_CONFED_SEQUENCE': ordered set of Member Autonomous Systems in the local confederation that the route has traversed - 'AS_CONFED_SET': unordered set of Member Autonomous Systems in the local confederation that the route has traversed
 */
export declare enum RouteAsPathPathSegmentTypeEnum {
    AsConfedSequence = "AS_CONFED_SEQUENCE",
    AsConfedSet = "AS_CONFED_SET",
    AsSequence = "AS_SEQUENCE",
    AsSet = "AS_SET"
}
export declare class RouteAsPath extends SpeakeasyBase {
    /**
     * [Output Only] The AS numbers of the AS Path.
     */
    asLists?: number[];
    /**
     * [Output Only] The type of the AS Path, which can be one of the following values: - 'AS_SET': unordered set of autonomous systems that the route in has traversed - 'AS_SEQUENCE': ordered set of autonomous systems that the route has traversed - 'AS_CONFED_SEQUENCE': ordered set of Member Autonomous Systems in the local confederation that the route has traversed - 'AS_CONFED_SET': unordered set of Member Autonomous Systems in the local confederation that the route has traversed
     */
    pathSegmentType?: RouteAsPathPathSegmentTypeEnum;
}
