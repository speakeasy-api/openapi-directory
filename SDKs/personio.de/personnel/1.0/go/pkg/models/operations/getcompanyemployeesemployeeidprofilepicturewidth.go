package operations

type GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams struct {
	EmployeeID int32 `pathParam:"style=simple,explode=false,name=employee_id"`
	Width      int32 `pathParam:"style=simple,explode=false,name=width"`
}

type GetCompanyEmployeesEmployeeIDProfilePictureWidthRequest struct {
	PathParams GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams
}

type GetCompanyEmployeesEmployeeIDProfilePictureWidthResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	GetCompanyEmployeesEmployeeIDProfilePictureWidth200ImagePngBinaryString []byte
}
