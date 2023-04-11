/**
 * Finding state:
 *
 * @remarks
 *   * notfixed - Issue can still be exploited
 *   * invalid - Issue determined to be a false positive
 *   * accepted - Issue will not be solved and the risk was accepted
 *   * fixed - No problem here anymore
 *
 */
export declare enum FindingStateEnum {
    Notfixed = "notfixed",
    Invalid = "invalid",
    Accepted = "accepted",
    Fixed = "fixed"
}
