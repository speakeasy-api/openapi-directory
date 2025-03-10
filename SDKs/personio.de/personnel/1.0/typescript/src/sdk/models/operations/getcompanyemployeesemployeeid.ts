/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCompanyEmployeesEmployeeIdRequest extends SpeakeasyBase {
  /**
   * Numeric `id` of the employee
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=employee_id",
  })
  employeeId: number;
}

export class GetCompanyEmployeesEmployeeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeResponse?: shared.EmployeeResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
