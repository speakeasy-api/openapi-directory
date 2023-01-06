package shared

type ImprovementProgramMultipartImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=image_file"`
}

type ImprovementProgramMultipart struct {
	ImageFile     *ImprovementProgramMultipartImageFile `multipartForm:"file"`
	ImageFileB64  *string                               `multipartForm:"name=image_file_b64"`
	ImageFilename *string                               `multipartForm:"name=image_filename"`
	ImageURL      *string                               `multipartForm:"name=image_url"`
	Tag           *string                               `multipartForm:"name=tag"`
}
