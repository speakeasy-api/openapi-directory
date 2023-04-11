import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Debugger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the breakpoint from the debuggee.
     */
    clouddebuggerDebuggerDebuggeesBreakpointsDelete(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest, security: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse>;
    /**
     * Gets breakpoint information.
     */
    clouddebuggerDebuggerDebuggeesBreakpointsGet(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest, security: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse>;
    /**
     * Lists all breakpoints for the debuggee.
     */
    clouddebuggerDebuggerDebuggeesBreakpointsList(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest, security: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse>;
    /**
     * Sets the breakpoint to the debuggee.
     */
    clouddebuggerDebuggerDebuggeesBreakpointsSet(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest, security: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse>;
    /**
     * Lists all the debuggees that the user has access to.
     */
    clouddebuggerDebuggerDebuggeesList(req: operations.ClouddebuggerDebuggerDebuggeesListRequest, security: operations.ClouddebuggerDebuggerDebuggeesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesListResponse>;
}
