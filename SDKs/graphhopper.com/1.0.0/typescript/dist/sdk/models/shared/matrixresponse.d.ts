import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";
export declare class MatrixResponseHints extends SpeakeasyBase {
    /**
     * Details of this hint
     */
    details?: string;
    /**
     * Optional. An array of from_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `from_point`s were not found.`
     */
    invalidFromPoints?: number[];
    /**
     * Optional. An array of to_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `to_point`s were not found.`
     */
    invalidToPoints?: number[];
    /**
     * Short description of this hint
     */
    message?: string;
    /**
     * Optional. An array of two-element arrays representing the from/to_point indices of points for which no connection could be found. Will only be added if `fail_fast=false` and some connections were not found.
     */
    pointPairs?: number[][];
}
/**
 * Matrix API response
 */
export declare class MatrixResponse extends SpeakeasyBase {
    /**
     * The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
     */
    distances?: number[][];
    /**
     * Optional. Additional response data.
     */
    hints?: MatrixResponseHints[];
    /**
     * Additional information for your request
     */
    info?: ResponseInfo;
    /**
     * The time matrix for the specified points in the order [[from1->to1, from1->to2, ...], [from2->to1, from2->to2, ...], ...]. The times are in seconds. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
     */
    times?: number[][];
    /**
     * The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.
     */
    weights?: number[][];
}
