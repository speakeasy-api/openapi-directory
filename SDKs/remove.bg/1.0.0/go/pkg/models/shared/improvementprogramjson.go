package shared

type ImprovementProgramJSON struct {
	ImageFileB64  *string `json:"image_file_b64,omitempty" form:"name=image_file_b64"`
	ImageFilename *string `json:"image_filename,omitempty" form:"name=image_filename"`
	ImageURL      *string `json:"image_url,omitempty" form:"name=image_url"`
	Tag           *string `json:"tag,omitempty" form:"name=tag"`
}
