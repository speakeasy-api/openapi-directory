import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different instances within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of instances within our infrastructure, availability can be influenced in a way that fits your needs best.
 *
 * @remarks
 *
 * In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some instances might fail together.
 *
 */
export declare class PlacementGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a PlacementGroup
     *
     * @remarks
     * Deletes a PlacementGroup.
     */
    deletePlacementGroupsId(req: operations.DeletePlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlacementGroupsIdResponse>;
    /**
     * Get all PlacementGroups
     *
     * @remarks
     * Returns all PlacementGroup objects.
     */
    getPlacementGroups(req: operations.GetPlacementGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlacementGroupsResponse>;
    /**
     * Get a PlacementGroup
     *
     * @remarks
     * Gets a specific PlacementGroup object.
     */
    getPlacementGroupsId(req: operations.GetPlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlacementGroupsIdResponse>;
    /**
     * Create a PlacementGroup
     *
     * @remarks
     * Creates a new PlacementGroup.
     *
     */
    postPlacementGroups(req: operations.PostPlacementGroupsCreatePlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostPlacementGroupsResponse>;
    /**
     * Update a PlacementGroup
     *
     * @remarks
     * Updates the PlacementGroup properties.
     *
     * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
     *
     */
    putPlacementGroupsId(req: operations.PutPlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPlacementGroupsIdResponse>;
}
