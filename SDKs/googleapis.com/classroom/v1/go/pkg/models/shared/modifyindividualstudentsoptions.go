// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ModifyIndividualStudentsOptions - Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
type ModifyIndividualStudentsOptions struct {
	// IDs of students to be added as having access to this coursework/announcement.
	AddStudentIds []string `json:"addStudentIds,omitempty"`
	// IDs of students to be removed from having access to this coursework/announcement.
	RemoveStudentIds []string `json:"removeStudentIds,omitempty"`
}
